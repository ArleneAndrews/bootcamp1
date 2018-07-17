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

    """ # Login - Correct credintials
    def test_login_proper_creds(self):
        tester = app.test_client(self)
        response = tester.post('/login', data=dict(username='admin', password='admin'), follow_redirects=True)
        self.assertTrue(b"You are logged in" in response.data)   """

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

if __name__ == '__main__':
    unittest.main()