using UnityEngine;

public class PlayerController : MonoBehaviour
{
    //Speed of the player 
    public float paddleSpeed = 10;

    //bounds of player
    public float topBound = 4.5F;
    public float bottomBound = -4.5f;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        Time.timeScale = 0; //Game starts paused, to start = press P
    }

    // Update is called once per frame
    void Update()
    {
        //Pauses or Plays the game when the users presses P
        if (Input.GetKeyDown(KeyCode.P) && Time.timeScale == 0)
        {
            Time.timeScale = 1;//Unpause game
        }
        else if (Input.GetKeyDown(KeyCode.P) && Time.timeScale == 1)
        {
            Time.timeScale = 0;//Pause game
        }
    }
    void FixedUpdate()
    {
        //Player input and sets speed
        float inputDirection = 0;

        //Checks for up key movement
        if (Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W))
        {
            inputDirection = 1; //Moves up
        }
        
        //Checks for down key movement
        else if (Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S))
        {
            inputDirection = -1; //Moves down
        }

        float movementAmount = paddleSpeed * inputDirection * Time.deltaTime;
        transform.Translate(0, movementAmount, 0);

        //Checks upper bound
        if (transform.position.y > topBound)
        {
            transform.position = new Vector3(transform.position.x, topBound, 0);
        }
        
        //Checks the bottom bound
        else if (transform.position.y < bottomBound)
        {
            transform.position = new Vector3(transform.position.x, bottomBound, 0);
        }
    }
}
