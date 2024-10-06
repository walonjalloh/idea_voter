const allowedOrigins = ['http://localhost:5173', 'https://localhost:3000','https://idea-voter.vercel.app/']

const corsOption = {
    origin : (origin,callback) => {
        console.log(`Origin: ${origin}`)
        if(allowedOrigins.includes(origin)|| !origin){
            callback(null,true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    method: ['POST','PATCH','DELETE','GET'],
    allowedHeader: ['Content-Types','Authorizaton'],
    credential:true
}

export default corsOption