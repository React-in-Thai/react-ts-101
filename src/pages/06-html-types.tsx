import React, { useRef, useEffect } from "react";

// todo : create input that will be focused if autoFocus prop is true
function Example({ autoFocus }: { autoFocus?: boolean }) {
  return (
    <form>
      <label htmlFor="input">Label</label>
      <input id="input" />
    </form>
  );
}



// todo : create component that accept 'as' prop to render HTMLTag
type AnyTag =
  | keyof JSX.IntrinsicElements
  | React.FunctionComponent<never>
  | (new (props: never) => React.Component);

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;

function Button<T extends AnyTag = 'button'>(props: { as: T } & PropsOf<T>): JSX.Element
function Button<T extends AnyTag = 'button'>({
  as: Tag = "button" as T,
  ...props
}: { as: any } & PropsOf<T>) {
  return <Tag {...props} />;
}




// todo : learn about Event
function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e);
  }
  return (
    <form
      ref={formRef}
      onSubmit={(
        e: React.FormEvent<HTMLFormElement> | React.SyntheticEvent
      ) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!
        // etc...
      }}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
      <button onClick={handleClick}>Cancel</button>
    </form>
  );
}
