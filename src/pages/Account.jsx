import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your Account</Heading>

      <Row>
        <Heading as="h3">Update user Data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update Password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
