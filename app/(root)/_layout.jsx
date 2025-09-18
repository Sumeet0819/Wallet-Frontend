import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function Layout() {
  const { isSignedIn, isLoaded } = useUser();

  // Wait until Clerk finishes loading
  if (!isLoaded)  return null; // or show a splash/loading screen
  

  // Redirect if not signed in
  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
