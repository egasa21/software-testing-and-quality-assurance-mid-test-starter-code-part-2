## To-Do: Implement Tests for Article CRUD UI

1. **To-Do: Implement "Load Article List" Test**
   - **Description**: Test to verify that the article list loads correctly.
   - **Steps**:
     - Navigate to the `index.html` page.
     - Wait for the `#article-list` element to load.
     - Verify that the article list contains at least one article.
   - **Implementation**:
     - Use `path.join(baseUrl, 'index.html')` to get the URL.
     - Wait for the element `#article-list` to be located.
     - Assert that the article list contains at least one article using `expect(articles.length).to.be.at.least(1)`.

2. **To-Do: Implement "Create New Article" Test**
   - **Description**: Test to verify that a new article can be created.
   - **Steps**:
     - Navigate to the `create.html` page.
     - Locate the title input field and submit button.
     - Enter the article title and submit the form.
     - Wait for the article list to update.
     - Verify that the new article appears in the article list.
   - **Implementation**:
     - Use `path.join(baseUrl, 'create.html')` for the URL.
     - Find the title input field and the submit button.
     - After entering the article title, click the submit button.
     - Assert that the newly created article is present in the article list using `expect(articleTitles).to.include('New Article Test')`.

3. **To-Do: Implement "Edit Existing Article" Test**
   - **Description**: Test to verify that an existing article can be edited.
   - **Steps**:
     - Navigate to the `index.html` page.
     - Find and click the edit link for an existing article.
     - Modify the article's title.
     - Submit the changes and wait for the list to update.
     - Verify that the article title was updated in the list.
   - **Implementation**:
     - Use `path.join(baseUrl, 'index.html')` for the URL.
     - Find the edit link with `a[href^="edit.html?id="]`.
     - Clear the title input, modify the text, and click the submit button.
     - Assert that the updated title appears in the article list using `expect(articleTitles).to.include('Updated Article Title')`.

4. **To-Do: Implement "View Article" Test**
   - **Description**: Test to verify that an article can be viewed.
   - **Steps**:
     - Navigate to the `index.html` page.
     - Click the view link for an article.
     - Verify that the article's title is displayed on the view page.
   - **Implementation**:
     - Use `path.join(baseUrl, 'index.html')` for the URL.
     - Find the view link with `a[href^="view.html?id="]`.
     - After navigating to the view page, assert that the article title is not empty using `expect(articleTitle).to.not.be.empty`.

5. **To-Do: Implement "Delete Article" Test**
   - **Description**: Test to verify that an article can be deleted.
   - **Steps**:
     - Navigate to the `index.html` page.
     - Find and click the delete button for an article.
     - Handle the confirmation alert and accept it.
     - Handle the success alert and accept it.
     - Verify that the article is no longer present in the list.
   - **Implementation**:
     - Use `path.join(baseUrl, 'index.html')` for the URL.
     - Find the delete button using `//button[text()='Delete']`.
     - Handle the confirmation and success alerts with `.switchTo().alert()`.
     - Assert that the deleted article no longer appears in the list using `expect(articleTitles).to.not.include('Updated Article Title')`.





| **Test Case**                             | **Test Description**                                                                                         | **Steps**                                                                                                                                             | **Assertion**                                                                                                           |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **1. Load Article List**                 | Verifies if the article list loads correctly.                                                                 | 1. Open `index.html` page. <br> 2. Wait for the element `#article-list` to load. <br> 3. Verify there is at least one article in the list.            | `expect(articles.length).to.be.at.least(1, 'No articles found on the list')`                                            |
| **2. Create New Article**                | Verifies that a new article can be created.                                                                   | 1. Open `create.html`. <br> 2. Enter title in the `#title` input field. <br> 3. Click the submit button. <br> 4. Verify the new article appears in the list. | `expect(articleTitles).to.include('New Article Test', 'New article was not added to the list')`                      |
| **3. Edit Existing Article**             | Verifies that an existing article can be edited.                                                               | 1. Open `index.html`. <br> 2. Click the edit link (`a[href^="edit.html?id="]`). <br> 3. Modify article title and submit. <br> 4. Verify the updated title in the article list. | `expect(articleTitles).to.include('Updated Article Title', 'Article title was not updated')`                        |
| **4. View Article**                      | Verifies that an article can be viewed.                                                                         | 1. Open `index.html`. <br> 2. Click the view link (`a[href^="view.html?id="]`). <br> 3. Verify the article's title is not empty.                     | `expect(articleTitle).to.not.be.empty`                                                                                 |
| **5. Delete Article**                    | Verifies that an article can be deleted.                                                                       | 1. Open `index.html`. <br> 2. Click the delete button. <br> 3. Handle confirmation and success alerts. <br> 4. Verify the article is removed from the list. | `expect(confirmationText).to.equal('Are you sure you want to delete this article?')`<br> `expect(successText).to.equal('Article deleted successfully')`<br> `expect(articleTitles).to.not.include('Updated Article Title', 'Article was not deleted')` |
