import RideLayout from '@/components/RideLayout'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ConfirmRide = () => {
  return (
    <RideLayout title="Choose a Driver">
        <FlatList /> 
    </RideLayout>
  )
}

export default ConfirmRide 