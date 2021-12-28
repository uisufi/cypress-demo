Feature: Search Feature    


Scenario: Search Pixel phones  
    Given I navigate to Google
    Then I see Google page opened
    And I search for "Pixel phone" 
    When I hit enter 
    Then Pixel phones are displayed in the search page 


 Scenario: Searching Apples 
    Given I see Google page opened 
    And I search for "Apples"
    When I hit enter 
    Then Apples are displayed in the search page

