# DEPLOYMENT GUIDE

1. Edit election poll
  - Login to VNNTU admin dashboard
  - Select **Polls > Manage Polls** from the sidebar
  - Edit the poll as necessary
2. Configure client for deployment
  - Replace `[poll id="n"]` with the poll of choice (in case more positions)
3. [Minifyjs](https://jscompress.com/) and replace script in `index.html`
4. Go to the vote page **Edit Page**
5. Paste content of `index.html` to the **Text editor** 
6. Paste content of `index.css` to the **Page Specific Stylesheet** at the bottom of the page
7. Copy the application public key to vnntu.com host
  - Login to host interface of vnntu.com
  - Go to **Files > File Manager**
  - In the left sidebar, find `public_html/pub/`
  - Upload public key file as `pubkey.txt`
  The [public key](http://vnntu.com/pub/pubkey.txt) is now available to client as a resource
