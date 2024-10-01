
import pytest
from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support.wait import WebDriverWait


class TestTodoApp:

    def setup_method(self, method):

        service = Service("C:/Users/chezh/Downloads/edgedriver_win64/msedgedriver.exe")
        self.driver = webdriver.Edge(service=service)  # Initialize the driver
        self.driver.get('https://todomvc.com/examples/angular/dist/browser/#/all')
        self.driver.maximize_window()

    def teardown_method(self, method):

        self.driver.quit()

    def test_add_todo(self):

        input_box = self.driver.find_element(By.XPATH, "//input[@placeholder='What needs to be done?']")

        # Add a todo
        todo_text1 = "Drink water every hour"
        input_box.send_keys(todo_text1)
        input_box.send_keys(Keys.ENTER)

        # Verify the todo is added
        todo_item = self.driver.find_element(By.XPATH, "//label[text()='Drink water every hour']")
        assert todo_item.is_displayed(), "The todo item was not added successfully."

    def test_mark_todo_complete(self):

        input_box = self.driver.find_element(By.XPATH, "//input[@placeholder='What needs to be done?']")

        todo_text = "Drink water every hour"
        input_box.send_keys(todo_text)
        input_box.send_keys(Keys.ENTER)

        # Mark the todo as complete
        toggle_complete = self.driver.find_element(By.XPATH, "//input[@class='toggle']")
        toggle_complete.click()

        # Verify todo is completed
        completed_item = self.driver.find_element(By.XPATH, "//li[@class='completed']")
        assert completed_item.is_displayed(), "The todo item was not marked as complete."

    def test_delete_todo(self):
        input_box = self.driver.find_element(By.XPATH, "//input[@placeholder='What needs to be done?']")

        # adding to do
        todo_text = "Drink water every hour"
        input_box.send_keys(todo_text)
        input_box.send_keys(Keys.ENTER)

        # Add second todo
        input_box.send_keys("This is a reminder")
        input_box.send_keys(Keys.ENTER)

        # delete button
        # delete_button = self.driver.find_element(By.XPATH, "//button[@class='destroy']")
        # delete_button.click()
        delete_button = self.driver.find_element(By.XPATH, "//label[normalize-space()='Drink water every hour']")
        delete_button.click()

        #active todos
        active_todo_labels = self.driver.find_elements(By.XPATH, "//ul[@class='todo-list']")
        active_todo_texts = [label.text for label in active_todo_labels]
        print(active_todo_texts)  # printing the active todos
        assert "Drink water every hour" not in active_todo_texts, "Completed todo item"

    def test_filter(self):
        # Add the first todo
        input_box = self.driver.find_element(By.XPATH, "//input[@placeholder='What needs to be done?']")
        input_box.send_keys("Drink water every hour")
        input_box.send_keys(Keys.ENTER)

        # Add second todo
        input_box.send_keys("This is a reminder")
        input_box.send_keys(Keys.ENTER)

        # Mark the first task as complete
        toggle_button = self.driver.find_element(By.XPATH, "//input[@class='toggle']")
        toggle_button.click()

        # Click on the 'Active' filter
        active_filter = self.driver.find_element(By.LINK_TEXT, "Active")
        active_filter.click()

        # Check that the active
        active_todo_labels = self.driver.find_elements(By.XPATH, "//ul[@class='todo-list']")

        # Assert that only the active task is displayed
        active_todo_texts = [label.text for label in active_todo_labels]
        print(active_todo_texts) #printing the active todos
        assert "Drink water every hour" not in active_todo_texts, "Completed todo item is incorrectly displayed in the active list"
        assert "This is a reminder" in active_todo_texts, "Active todo item is missing in the active list"
