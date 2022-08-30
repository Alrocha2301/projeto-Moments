import Moment from 'App/Models/Moment'
/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {

  public async store({request, params, response}: HttpContextContract) {

    const body = request.body()
    const momentId = params.momentId

    body.momentId = momentId

    await Moment.findOrFail(momentId)

    const comment = await Comment.create(body)



    response.status(201)

    return {
        message: "Comentário adicionado com sucesso!",
        data: comment
    }

  }
}
