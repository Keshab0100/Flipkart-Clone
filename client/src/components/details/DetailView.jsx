
import { useEffect } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'

const DetailView = () => {

    const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(id))
    },[dispatch, id])

  return (
    <div>DetailView</div>
  )
}

export default DetailView