using UnityEngine;

public class BallSpawnerController : MonoBehaviour
{
    public GameObject ball;
    public float ballSpeed = 3.5f;
    void Start()
    {
        SpawnBall();
        
    }

    // Update is called once per frame
    void Update()
    {
        if (transform.childCount == 0)
        {
            SpawnBall();
        }
    }

    void SpawnBall()
    {
        GameObject newBall;
        newBall = Instantiate(ball, this.transform.position, this.transform.rotation) as GameObject;
            newBall.transform.SetParent(this.transform);
        
        // Set the speed after spawning
        BallController ballController = newBall.GetComponent<BallController>();
        if (ballController != null)
        {
            ballController.ballspeed = ballSpeed;
        }
    }
}
