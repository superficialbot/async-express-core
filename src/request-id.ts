export const assignReqId = (req, res, next) => { req.id = Math.random().toString(); next(); };
