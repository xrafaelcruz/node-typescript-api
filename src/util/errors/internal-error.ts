export class InternalError extends Error {
    constructor(
        public message: string, 
        protected code: number = 500, 
        protected description?: string
    ) {
        super(message)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor) // this class dont show when error happn and go to error origin
    }
}