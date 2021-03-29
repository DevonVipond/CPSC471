const TYPES = {
  NUMBER: (data)=>(typeof data)==='number'&&!isNaN(data),
  STRING: (data)=>(typeof data)==='string',
  DATE:   (data)=>(typeof data)==='date',
  BOOL:   (data)=>(typeof data)==='boolean',
  OBJECT: (data)=>(typeof data)==='object'
};

const validateType = (value, expectedTypeValidator)=> {
    if(!value || !expectedTypeValidator(value))
        throw Error('Invalid type for argument: ' + value)
}

class RequiredArgError extends Error {
    constructor(arg) {
        super(`${arg} must be defined`)
    }
}

const requiredArg = (arg) => {
    throw new RequiredArgError(arg)
}
module.exports = {validateType, TYPES, requiredArg}