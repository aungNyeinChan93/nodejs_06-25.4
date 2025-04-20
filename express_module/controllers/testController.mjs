

const TestController = {
    index: (req, res, next) => {
        res.json({
            message: 'Hello from TestController!'
        })
    },
    all(req, res, next) {
        res.json({
            message: 'Hello from TestController all!'
        })
    }
}

export default TestController;