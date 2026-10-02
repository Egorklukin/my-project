import type { UserDataProps } from "../../props/UserDataProps";
import { UserCard } from "../UserCard/UserCard";

export function Header(props: UserDataProps) {
  console.log(props);
  const { userData } = props;
  return (
    <header>
      <div>
        {userData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </header>
  );
}
