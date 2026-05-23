using UnityEngine;

public class MovingObstacle : MonoBehaviour
{
    public float speed = 2f;
    public float topBound = 3f;
    public float bottomBound = -3f;
    
    private float movementdirection = 1f;
    
    void Update()
    {
        transform.position += new Vector3(0, movementdirection * speed * Time.deltaTime, 0);
        
        if (transform.position.y >= topBound)
            movementdirection = -1f;
        else if (transform.position.y <= bottomBound)
            movementdirection = 1f;
    }
}