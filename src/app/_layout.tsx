
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1E3A8A',
        },
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#7C3AED',
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="school"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="hobbies"
        options={{
          title: 'Hobbies',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="football"
              color={String(color)}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
