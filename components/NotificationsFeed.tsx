import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";

const NotificationsFeed = () => {
  const router = useRouter();

  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  // const goToPost = useCallback(
  //   (postId: string) => {
  //     router.push(`/posts/${postId}`);
  //   },
  //   [router, fetchedNotifications.postId]
  // );

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return <div className="text-neutral-600 text-center p-6 text-xl">No notifications</div>;
  }

  return (
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div
          // onClick={() => goToPost(notification.postId)}
          key={notification.id}
          className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800 cursor-pointer hover:bg-neutral-900 transition"
        >
          <BsTwitter color="white" size={32} />
          <p className="text-white">{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsFeed;
