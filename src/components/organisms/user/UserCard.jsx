import { Card } from "../../atoms/Card/Card";
import { UserIcon } from "../../molecules/user/UserIcon";
import styled from "styled-components";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIcon image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>Mail</dt>
        <dd>{user.email}</dd>
        <dt>Tell</dt>
        <dd>{user.phone}</dd>
        <dt>factory</dt>
        <dd>{user.factory.name}</dd>
        <dt>Web</dt>
        <dd>{user.webSite}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
