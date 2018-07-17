from app import app
import unittest


class FlaskTestCase(unittest.TestCase):

    # Ensure that flask was set up correctly
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/login', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    # Ensure that login page loads correctly
    def test_login_page_loads(self):
        tester = app.test_client(self)
        response = tester.get('/login', content_type='html/text')
        self.assertTrue(b"Please log in" in response.data)  

    # Login - Correct credintials
    def test_login_proper_creds(self):
        tester = app.test_client(self)
        response = tester.post('/login', data=dict(username='admin', password='admin'), follow_redirects=True)
        self.assertTrue(b"You are logged in" in response.data)

    # Login - Wrong credintials
    def test_login_wrong_creds(self):
        tester = app.test_client(self)
        response = tester.post(
        '/login', 
        data=dict(username='cat', password='kitten', 
        follow_redirects=True)
        )
        self.assertTrue(b"Invalid Credentials. Are you sure you know who you are?" in response.data)   

    # Logout
    def test_logout(self):
        tester = app.test_client(self)
        tester.post(
        '/login', 
        data=dict(username='admin', password='admin', 
        follow_redirects=True)
        )
        response = tester.get('/logout', follow_redirects=True)
        self.assertTrue(b"You are logged out" in response.data)

    # Main page requires login
    def test_login_require(self):
       tester = app.test_client(self)
       response = tester.get('/', follow_redirects=True)
       self.assertTrue(b"You need to login first." in response.data) 

   # Logging out requires login
    def test_login_require_for_log_out(self):
       tester = app.test_client(self)
       response = tester.get('/logout', follow_redirects=True)
       self.assertTrue(b"You need to login first." in response.data)


    # Tests for posts
    def test_posts_read_right(self):
        tester = app.test_client(self)
        response = tester.post('/login', data=dict(username='admin', password='admin'), follow_redirects=True)
        self.assertTrue(b"Well" in response.data)

if __name__ == '__main__':
    unittest.main()