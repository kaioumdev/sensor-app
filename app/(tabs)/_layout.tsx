import { Stack } from 'expo-router'

const TabLayout = () => {
  return (
     <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='index' />
    <Stack.Screen name='accelerometer' />
    <Stack.Screen name='audio' />
    <Stack.Screen name='brightness' />
    <Stack.Screen name='calendar' />
    <Stack.Screen name='camera' />
    <Stack.Screen name='cellular' />
  </Stack>
  )
}

export default TabLayout