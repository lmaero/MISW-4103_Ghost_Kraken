import { Actions } from "./Actions";

export default function fillSignInForm(invalidField, ghostVersion = 3) {
  Actions.getAndType('input[id="blog-title"]', "Ghost Blog");
  Actions.getAndType('input[id="name"]', "Alonso Cantu");
  Actions.getAndType('input[id="email"]', "a.cantu@uniandes.edu.co");
  Actions.getAndType('input[id="password"]', "MISO420899494949494");

  switch (invalidField) {
    case "email":
      Actions.getAndType('input[id="email"]', "a.cantu#uniandes.edu.co");
      break;
    case "password":
      Actions.getAndType('input[id="password"]', "MISO4");
      break;
    case "blogTitle":
      Actions.getAndClear('input[id="blog-title"]');
      break;
    case "name":
      Actions.getAndClear('input[id="name"]');
      break;
    case "empty":
      Actions.getAndClear('input[id="blog-title"]');
      Actions.getAndClear('input[id="name"]');
      Actions.getAndClear('input[id="email"]');
      Actions.getAndClear('input[id="password"]');
      break;
    default:
      break;
  }

  if (ghostVersion === 3) {
    Actions.clickContains("Last step: Invite staff users ");
  } else {
    Actions.getAndClick('[type="submit"]');
  }
}

export function signIn() {
  Actions.getAndType('input[type="email"]', "a.cantu@uniandes.edu.co");
  Actions.getAndType(
    'input[type="password"]',
    "Micontrasenaestaencriptada1990!"
  );
  Actions.getAndClick('button[type="submit"]');
}
