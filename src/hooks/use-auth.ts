import {toast} from "sonner";
import {useRouter} from "next/navigation";
export const useAuth = () => {
  const router = useRouter();
  const signOut = async () => {
    try {
      const rest = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {"content-type": "application/json"},
        }
      );

      if (!rest.ok) throw new Error();

      toast.success("Signed out successfully");
      router.push("/log-in");
      router.refresh();
    } catch (error) {
      toast.error("Failed to sign out. Please try again later.");
    }
  };

  return {signOut};
};
