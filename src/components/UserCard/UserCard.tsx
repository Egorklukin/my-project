import type { UserDataType } from "../../types/UserDataType";

export function UserCard(props: { user: UserDataType }) {
  const { user } = props;
  return <article>{user.username}</article>;
}
