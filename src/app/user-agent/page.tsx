import { headers } from "next/headers";
import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { UserAgent } from "@/views/userAgent";

const UserAgentPage = async () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "Unknown User Agent";

  return (
    <UserAgentProvider userAgent={userAgent}>
      <UserAgent />
    </UserAgentProvider>
  );
};

export default UserAgentPage;
