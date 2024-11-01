function env(key) {
    console.log(process.env.key);
    const value = process.env[key];
    if (value === undefined) {
      throw `${key} is undefined`;
    }
    return value;
}

module.exports = {
    env
}