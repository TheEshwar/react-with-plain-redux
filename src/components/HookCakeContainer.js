import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

export default function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of cakes (Hooks) - {numOfCakes} </h2>
        <button onClick={ () => dispatch(buyCake())}>Buy Cake (Hooks)</button>
    </div>
  )
}
