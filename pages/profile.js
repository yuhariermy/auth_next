import { getSession } from "next-auth/react";

const Profile = () => {
  return <div>Profile</div>;
};

export default Profile;

// Server Side Rendering == Protected Route
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
