import { templateInstance } from "../instance.js";

export const profileButton = (profile) => {
  const clone = templateInstance('profileButton');
  clone.querySelector('img').src = profile.avatar;
  clone.querySelector('.btn').innerText = profile.name
  clone.querySelector('a').href = `/social-media-client-workflow-ca/?view=profile&name=${profile.name}`;
  return clone
}