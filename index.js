import express from 'express'
import api from 'api'
const app = express()
const port = 3000
app.get('/', ( req,res) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const sdk = api('@render-api/v1.0#dnrc1ulf088q9j');
    sdk.auth('rnd_xTyjqKemHQIFCCagCeM6FlVVPYmd');
    sdk.getServices({ limit: '20' })
        .then(({ data }) =>res.send(data))
        .catch(err => console.error(err));
})
app.listen(port, () => {
    console.log('example app listening on...')
})