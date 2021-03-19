const questionDatabaseDriver = require('../db/drivers/questionDatabaseDriver')()
const QuestionService = require('../services/question/index')
const createQuestionModel = require('../models/question')

function QuestionController() {
    if (!(this instanceof QuestionController)) {
        return new QuestionController();
    }
}

QuestionController.prototype.getNewestQuestions = async (req, res, next) => {
    try {
        const questions = await QuestionService.findNewest()

        res.status(200).send(JSON.stringify(questions))
    } catch (e) {
        next(e)
    }
}

QuestionController.prototype.findById = async (req, res, next) => {
    if (!req.params.id) {
        res.status(400).send('Question id required')
        return
    }

    try {
        const question  = await QuestionService.findById(req.params.id)

        if (!question) {
            res.status(400).send('Question does not exist!')
            return
        }

        res.status(200).send(question[0])
    } catch (e) {
        next(e)
    }
}

QuestionController.prototype.createQuestion = async (req, res, next) => {
    try {

        const { title, body, tagName } = req.body
        const userId = req.userId

        const question = createQuestionModel({ title, body, tagName, userId })

        const success = QuestionService.save(question)

        if (!success) {
            res.status(400).send('Duplicate question exists!')
            return
        }

        res.status(200).send('Successfully created question!')

    } catch (e) {
        next(e)
    }
}

QuestionController.prototype.deleteQuestion = async (req, res, next) => {
    try {
        const success = await createQuestionModel(req.params.questionId)

        if (success) {
            res.status(200).send('Successfully deleted question!')
            return
        }

        res.status(400).send('Question already exits!')

    } catch (e) {
        next(e)
    }
}

module.exports = QuestionController