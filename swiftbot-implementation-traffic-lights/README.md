A project relating to the Swiftbots we were given. Each student assigned a specific task the Swiftbot should do, in my case traffic lights. Below is the zip file of the coding I implemeneted and much more in order to achieve this.


https://drive.google.com/file/d/19MuppgNnzqyFvvqpB4U05TO-o_Wyag4x/view?usp=drive_link


TLDR;
Task 2 – Traffic Light
The purpose of this program is to navigate the Swiftbot using colour codes inputted using the camera.
The traffic lights have three colours; red, green and blue. You may use a coloured image instead of an actual
light. The Swiftbot should respond to traffic lights when the traffic lights are within 20 cm from the Swiftbot.
The program should process the photo taken by the Swiftbot’s camera to determine the colour. For example,
your program could convert the image into a pixel matrix and then use the RGB values of each pixel to
compute the average colour value. This average colour value could then be used to determine the colour of
the traffic light.
To start the program, the user should press button ‘A’ on the Swiftbot.
This should make the Swiftbot, first, turn the underlights (bottom LEDs) to yellow, and, then, start moving
forward at a low speed (initial speed) until it encounters the traffic light. The Swiftbot should respond to the
traffic light when it is 20 cm (or less) ahead of the robot.
If the traffic light colour is green, the underlights should be set to green and the Swiftbot should pass the
traffic light within 2 seconds. You can calculate the speed that the Swiftbot should move forward by
experimenting with your Swiftbot and using simple mathematics. After passing the traffic light, the Swiftbot
should stop for half a second, set the underlights to yellow, and then the robot should move forward in its
initial speed until it detects the next traffic light.
If the traffic light colour is red, the underlights should be set to red and the Swiftbot should come to a stop at
the traffic light. After half a second, the Swiftbot should start moving forward at its initial speed until it
detects the next traffic light.
If the traffic light colour is blue, the Swiftbot should stop for half a second, blink the underlights in blue and
then, should change direction by turning 90 degrees to left. The robot should then move at a low speed for 1
second and stop. After half a second, the Swiftbot should retrace its movement and move back to the original
path. Then the robot should move forward at its initial speed until it detects the next traffic light.
The program should stop when the user presses the ‘X’ button on the Swiftbot.
Before the program terminates it should ask the user whether it should display the log of the execution. If the
user responds ‘Yes’ by pressing the button ‘Y’, the program should display the following information:
▪ The number of times the Swiftbot encountered traffic lights.
▪ The most frequent traffic light colour the Swiftbot encountered
▪ The number of times the most frequent traffic light was detected.
▪ The total duration of execution.
If the user doesn’t want to view the log, the user should press button ‘X’ again. The program should write the
log information to a text file before terminating the program.
This program should be implemented using a command-line user interface (input and output printed in the
command prompt). Your program should make appropriate error checks and exception handling in order to
ensure that the input values are within the valid range specified in the task description. Invalid input should
be rejected, and the program should display appropriate error messages and ask the user for new input. The
software should be designed in such a way that it enhances user experience (i.e. ease of use).
This description includes the required, core functionalities of the program. However, marks will also be
awarded for additional functionalities that you have come up with. The additional functionalities should be
useful and ingenuous and showcase your software development skills. The additional functionalities should
not replace or conflict with the required functionalities of the task.
Task 3 – Navigate
The purpose of this program is to guide the Swiftbot to navigate a space using commands provided via QR
codes. The Swiftbot should start its`` journey by scanning a QR code which gives the directions for the next
stop. At each stop, a QR code will be placed specifying how to continue the journey. The directions are
specified using the following six commands:
F (for Forward movement)




