using UnityEngine;

public class EnemyController : MonoBehaviour
{
    //Speed of the enemy
    public float enemyspeed = 1.75F;

    //The ball
    Transform ball;

    //Ball's rigidbody2D
    Rigidbody2D ballPhysics;

    //Bounds of enemy
    public float topBound = 4.5F;
    public float bottomBound = -4.5F;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        //Finding the ball
        if (ball == null)
        {
            ball = GameObject.FindGameObjectWithTag("Ball").transform;
        }

        //Setting the ball's rigidbody to a variable
        ballPhysics = ball.GetComponent<Rigidbody2D>();

        //Checking X direction of the ball
        if (ballPhysics.linearVelocity.x < 0)
        {
            //Checking y direction of ball
            if (ball.position.y < this.transform.position.y)
            {
                //move ball down if lower than paddle
                transform.Translate(Vector3.down * enemyspeed * Time.deltaTime);
            }
        }
        else if (ball.position.y > this.transform.position.y)
        {
            //Move ball up if higher than paddle
            transform.Translate(Vector3.up * enemyspeed * Time.deltaTime);
        }
        //Set bound of enemy
        if (transform.position.y > topBound)
        {
            transform.position = new Vector3(transform.position.x, topBound, 0);
        }
        else if (transform.position.y < bottomBound)
        {
            transform.position = new Vector3(transform.position.y, bottomBound, 0);
        }
    }
}
