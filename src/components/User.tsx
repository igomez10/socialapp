// server-side rendered
export type APIUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type UserProps = {
  user: APIUser;
};

// component user
export function User({ props }: { props: UserProps }) {
  return (
    <>
      <div>
        {/* name */}
        <hr />
        <h1>Name: {props.user.name}</h1>
        {/* username */}
        <h1>Username: {props.user.username}</h1>
        {/* email */}
        <h1>Email: {props.user.email}</h1>
        {/* address */}
        <h1> Address: </h1>
        <h1>{props.user.address.street}</h1>
        <h1>{props.user.address.suite}</h1>
        <h1>{props.user.address.city}</h1>
        <h1>{props.user.address.zipcode}</h1>
        <h1>{props.user.address.geo.lat}</h1>
        <h1>{props.user.address.geo.lng}</h1>
        {/* phone */}
        <h1>Phone: {props.user.phone}</h1>
        {/* website */}
        <h1>Website: {props.user.website}</h1>
        {/* company */}
        <h1>Company: {props.user.company.name}</h1>

        {/* horizontal line */}
        <hr />
      </div>
    </>
  );
}
