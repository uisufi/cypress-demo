Feature: Google Search 

Scenario: Google homepage check 
 Given I navigate to Google
 Then I see Google page opened
 And I search for a Pixel phone 
 When I hit enter 
 Then Pixel phones are displayed in the search page 
