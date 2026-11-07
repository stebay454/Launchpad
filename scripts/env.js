export function findMissing(env, required) {
  return required.filter(
    (name) => env[name] === undefined || env[name] === ""
  );
}