import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen name="tasks" options={{ tabBarLabel: "Tasks" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "My Profile" }} />
    </Tabs>
  );
}
