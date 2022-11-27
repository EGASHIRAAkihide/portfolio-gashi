import { NextApiRequest, NextApiResponse } from 'next'
import slack from '../../lib/slack'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body
  if (typeof message === 'undefined') {
    res.status(400).end('Invalid body: message')
  }

  try {
    const result = await slack.sendToSlack(message)
    res.status(200).end(`result: ${result}`)
  } catch (err) {
    res.status(500).end(`error: ${err}`)
  }
}