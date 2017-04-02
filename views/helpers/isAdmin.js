// Usage in template: `{{#isAdmin}}`

module.exports = function (context) {
    var user = context.data.root.user;

    if (user.role === 'admin') {
    // if user verified as admin, add further HTML which will be rendered if the helper returns true
        return context.fn(this);
    }
    // for no admin users the part between the isAdmin block won't be rendered
    return context.inverse(this);
};
