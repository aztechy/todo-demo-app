# Todo - Demo App

App, to help demonstrate the power of angular js in helping to create clean front-end applications.

To aid in learning, I've tried to break the iterative process into various tags.  For those unfamiliar with how to use tags, typing:

git checkout tag

Will provide you the code bundled for that particular tag.

---

### Version Tags

* v0.1 - This just illustrates the basic structure of the application and sets up our html to be ready for angular inclusion.
* v0.2 - Code here demonstrates the two-way binding provided to us by angular to hook up our standard 'Hello World' programs.
* v0.3 - Demonstrate how to integrate functions and dig into actually creating our todo app.
* v0.4 - Building on top of the existing application by allowing our users to remove any completed items.
* v0.4.1 - Unit tests included into app.

---

### Getting the App to Run

If using node:

* Run: npm install
* Run: node server.js
* Within the browser go to localhost:3000


For apache setup I modify my httpd.conf to contain the following:

    Listen 127.0.0.1:3000
    
    <VirtualHost 127.0.0.1:3000>
      DocumentRoot "/path/to/app/dir/on/system"
      DirectoryIndex index.html
      <Directory "/path/to/app/dir/on/system">
        AllowOverride All
        Allow from All
      </Directory>
    </VirtualHost>

Save the file and restart the apache server.

### Running tests

* I suggest having karma-cli installed globally: npm install -g karma-cli
* Run: karma start tests/karma.conf.js