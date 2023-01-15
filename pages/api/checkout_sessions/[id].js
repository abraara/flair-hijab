import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const id = req.query.id;

    if (req.method === 'POST') {
        try{
            if (!id.startsWith('cs_')) {
                throw Error('Incorrect CheckoutSession ID.');
            }
            const checkout_session = await stripe.checkout.sessions.retrieve(id);

            res.status(200).json(checkout_session);
        } catch (err){
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}