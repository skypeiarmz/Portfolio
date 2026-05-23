using UnityEngine;

public class BallController : MonoBehaviour
{
    //Speed of the ball
    public float ballspeed = 3.5F;

    //Initial direction of the ball
    private Vector2 initialDirection;

    //Ball's components
    Rigidbody2D rig2D;

    //Audio
    public AudioClip hitPaddleSound;
    public AudioClip hitWallSound;
    private AudioSource audioPlayer;
       void Start()
    {
        //Setting balls rigidbody 2d
        rig2D = this.gameObject.GetComponent<Rigidbody2D>();

        //Generates random number based on possible directions
        int randomDirection = Random.Range(1, 4);

        //Setting up inital direction
        if (randomDirection == 1)
        {
            initialDirection = new Vector2(1, 1);
        }
        else if (randomDirection == 2)
        {
            initialDirection = new Vector2(1, -1);
        }
        else if (randomDirection == 3)
        {
            initialDirection = new Vector2(-1, -1);
        }
        else if (randomDirection == 4)
        {
            initialDirection = new Vector2(-1, 1);
        }

        //Moves ball in inital direction and adds speed
        rig2D.linearVelocity = (initialDirection * ballspeed);
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Paddle"))
        {
            if (hitPaddleSound != null && audioPlayer != null)
            {
                audioPlayer.PlayOneShot(hitPaddleSound);
            }
        }
        else
        {
            if (hitWallSound != null && audioPlayer != null)
            {
                audioPlayer.PlayOneShot(hitWallSound);
            }
            
        }
        
    }
}
