const answerDatabaseDriver = require('../db/drivers/answerDatabaseDriver')()
const commentDatabaseDriver = require('../db/drivers/commentDatabaseDriver')()

function AnswerController() {
    if (!(this instanceof AnswerController)) {
        return new AnswerController();
    }
}

AnswerController.prototype.getAnswersForQuestion = async (req, res) => {
    const {questionId} = req.body

    if (!questionId) {
        return res.status(400).send('Missing critical info')
    }

    try {
        let answers = []
        answers = await answerDatabaseDriver.findAllAnswersForQuestion(questionId)

        answers = answers.map(a => {
            const ret = a.attributesHash()
            const comments = commentDatabaseDriver.findAllCommentsForAnswer(ret.answerId)
            if (comments) ret.comments = comments

            return ret
        })

       res.status(200).send(JSON.stringify(answers))
    } catch (err) {
        res.status(500).send('Internal error')
    }
}

AnswerController.prototype.createAnswer = async (req, res) => {
    try {
        const {body, questionId} = req.body
        const userId = req.userId

        console.log(req.body)

        if (!body || !questionId) {
            res.status(400).send('Missing critical information')
            return
        }

        if (!userId) {
            res.status(400).send('Unable to determine user!')
            return
        }

        const success = await answerDatabaseDriver.insert(questionId, userId, body)

        if (!success) {
            res.status(400).send('Duplicate answer exists!')
            return
        }

        res.status(200).send('Successfully created answer!')
    } catch (err) {
        res.status(500).send(`Internal error`)
    }
}

AnswerController.prototype.deleteAnswer = async (req, res) => {
    try {
        const {answerId} = req.params
        if (!answerId) {
            res.status(400).send('Missing critical information')
            return
        }

        await answerDatabaseDriver.delete(answerId)
        res.status(200).send('Successfully deleted answer!')
    } catch (err) {
        res.status(500).send(`Internal error: {err.errno}`)
    }

}

module.exports = AnswerController
