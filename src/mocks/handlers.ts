/* eslint-disable arrow-body-style */
import { rest } from 'msw';
import { articlesMock, articlesMock2, articleMockInner } from './articlesMock';

export const handlers = [
  rest.get(
    `https://www.rijksmuseum.nl/api/en/collection`, 
    async (req, res, ctx) => {
      if(req.url.searchParams.get('p') === '1') {
        return res(
          ctx.status(200),
          ctx.json({
            artObjects: articlesMock
          })
        )
      }
      
      if(req.url.searchParams.get('p') === '2') {
        return res(
          ctx.status(200),
          ctx.json({
            artObjects: articlesMock2
          })
        )
      }
      
      return res(
        ctx.status(200),
        ctx.json({
          artObject: articleMockInner
        })
      )
    }
  ),
]
