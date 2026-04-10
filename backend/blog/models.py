from django.db import models

# Create your models here.
class Articles(models.Model):
    objects = models.Manager
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='blogMedias/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)