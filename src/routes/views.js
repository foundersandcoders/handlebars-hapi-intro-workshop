module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    // Render the view with the custom greeting
    const data = {
        title: 'This is the index view',
        message: 'Hapi templating with Handlebars...',
        user: {
          firstName: "Marina",
          lastName: "Sideri",
          role: "admin"
        }
    };
    // Select which view to render (in this case index.html)
    return reply.view('index', data);
  }
}
