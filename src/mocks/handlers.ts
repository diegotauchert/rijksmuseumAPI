/* eslint-disable arrow-body-style */
import { rest } from 'msw';
import { articlesMock, articlesMock2, articleMockInner } from './articlesMock';

export const handlers = [
  rest.get(
    `https://www.rijksmuseum.nl/api/en?key=JElajnDl`, 
    async (req, res, ctx) => {
      if(req.url.searchParams.get('page') === '1') {
        return res(
          ctx.status(200),
          ctx.json({
            response: {
              docs: articlesMock
            }
          })
        )
      }
      
      if(req.url.searchParams.get('page') === '2') {
        return res(
          ctx.status(200),
          ctx.json({
            response: {
              docs: articlesMock2
            }
          })
        )
      }
      
      return res(
        ctx.status(200),
        ctx.json({
          response: {
            docs: articleMockInner
          }
        })
      )
    }
  ),
]
