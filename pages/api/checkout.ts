import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type Data = {
  session?: Stripe.Checkout.Session
  message?: string
}

type LineItem = {
  price: string
  quantity: number
}

type Req = {
  lineItems: LineItem[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method != 'POST') {
    res.status(405).json({message: 'POST method required'})
  }

  try {
    const body: Req = JSON.parse(req.body);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '',{ 
    apiVersion: '2022-11-15'
  });

  const session = await stripe.checkout.sessions.create({
    success_url: "https://flair-hijab.vercel.app/success?sessionId={CHECKOUT_SESSION_ID}",
    cancel_url: "https://flair-hijab.vercel.app/cancel",
    line_items: body.lineItems,
    mode: 'payment'
  });

  res.status(201).json({session});

  }catch (e) {
    res.status (500).json({message: e.message})
  }
}