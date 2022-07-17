import { getDoc } from 'firebase/firestore'
import React from 'react'
import { getDocById } from '../../../../DTL'
import { MortgageEngin } from '../../../../engines/MortgageEngine'
import { parseURLQuery } from '../../../../helpers'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApplicationType, rankingAttributeType } from '../../../../engines/programs/types'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const pageSize=7
    const parsedQuery= parseURLQuery(req.query)
    const { id,start, ...filter } = parsedQuery
    const attributes=filter.attributes
    
    let rankingAttributes:rankingAttributeType[]=[]
    if (attributes)
    rankingAttributes=attributes.slice(0, -1).split(',')
    
    const index=start? start :0
    if (!id) return res.status(400).json({ message: "bad request" })
    
    try {
        const application:ApplicationType = await getDocById('applications', id)
        if (application) {
            
            const data = MortgageEngin(application, filter,rankingAttributes)
            
            const response={
                metrics:data.metrics,
                count:data.rankedResults.length,
                pageSize:pageSize,
                nextIndex:index+pageSize<data.rankedResults.length?index+pageSize:null,
                prevIndex:index-pageSize>=0?index-pageSize:null,
                results:data.rankedResults.slice(index,index+pageSize)
            }
            return res.status(200).json(response)
        }
        return res.status(404).json({ message: "404 No application" })
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}