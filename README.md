# User Management Portal
A 'User Management' portal where administrators can access a list of their team members who are registered for a website or application. Admins can add, delete, edit, lock, or unlock users. Admins can also search and sort their listed team members.

[View the app](https://immersedusermanagement.netlify.app/) live in a browser!

Hosted free on and continuously deployed to Netlify. App status: [![Netlify Status](https://api.netlify.com/api/v1/badges/bca008e3-e0c3-4262-b7ad-bcb4420381a4/deploy-status)](https://app.netlify.com/sites/immersedusermanagement/deploys)

## To run locally
Download or clone repo, run ```npm install```. Then run ```npm run dev``` to see dev site at ```localhost:3000```. Dist files are stored in memory unless you run ```npm run build``` to build dist files.

## Packages used
**React**
JS library.

**Redux**
State management.

**Redux thunk**
Side effect & state management (i.e. CRUD calls).

**Webpack**
Module bundler.

**Sass & CSS Modules**
Sass for syntax and helpers, CSS Modules for modularizing code and simplifying classnames.

**React icons**
Small package to import icons.

**Reset CSS**
Small package to reset default browser styles.

## To Do List
1. Make prod Webpack config and update scripts to deploy prod React build instead of dev build.
2. Style loading message.
3. Style action buttons.
4. Lock/unlock functionality.
5. Edit functionality.
6. Style locked user so it's obvious the account is locked at a glance.
7. Replace alerts with actual styled error messages.
8. Add alerting to verify user actions (i.e. 'Are you sure you want to delete this user?).
9. Tests (Jest).
10. Add admin / subadmin roles to team JSON. Give admin all functional access but restrict subadmin to read only.
11. Look into using Redux persist to store data in local storage, less reliance on server.
12. Replace hard-coded data with fetched data for company name, logo.
13. Fix bug where lists that are already sorted confuse the Sort Order button.
14. Scroll to newly added user in list immediately after adding.
15. Implement persistence on server
